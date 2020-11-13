// // npm dependencies
// const jwt                       = require('jsonwebtoken');
// const config                    = require('config');

// // Iternal dependencies
// const { roles }                 = require('../utilities/roles');
// const messages                  = require('../utilities/static_messages');
// const { handleResponse }        = require('../utilities/utils');
// const { statusCode, userRoles } = require('../utilities/constants');

// /**
//  * @param {object}  request     Request body from data sent by end user. 
//  * @param {object}  response    Response data 
//  * @description     This method verifies the token and forwards the process.  
//  */
// authentication = (request, response, next) => {
//     // Fetching the token from headers.
//     const token = request.header('token');
//     // If token doesn't exists, returns respective message to end user. 
//     if (!token) return handleResponse(statusCode.FORBIDDEN, response, { message: messages.TOKEN_REQUIRED_TEXT });
//     try {
//         // Decoding the data in token.
//         const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
//         // Adding the decoded data to request object.
//         request.user = decoded;
//         // next middleware.
//         next();
//     } catch (ex) {
//         console.log(messages.AUTHENTICATION_TEXT);
//         // If token expires, returns respective message to end user. 
//         return handleResponse(statusCode.UNAUTHORIZED, response, { message: messages.TOKEN_INVALID_TEXT });
//     }
// }

// /**
//  * @param {object}  request     Request body from data sent by end user. 
//  * @param {object}  response    Response data 
//  * @description     This method verifies the role and forwards the process.  
//  */
// authorization = (request, response, next) => {
//     var roleType;
//     var route;
//     try {
//         // Fetching the required data from request body.
//         const token = request.header('token');
//         if (request.route.path.length > 1) {
//             route = request.baseUrl + request.route.path;
//         } else {
//             route = request.baseUrl;
//         }
//         const methodType = request.method;
//         // Decoding the data in token.
//         const tokenData = jwt.verify(token, config.get('jwtPrivateKey'));
//         // Checking the isAdmin field in token data and setting the respective user role.
//         if (tokenData.isAdmin === true) {
//             roleType = userRoles.ADMIN;
//         } else {
//             roleType = userRoles.USER;
//         }
//         // Checking whether the url is accessibble to end user or not.
//         const validateRole = roles.getRoleRoutePrivilegeValue(roleType, route, methodType);
//         // If not, returns respective message to end user. 
//         if (!validateRole) return handleResponse(statusCode.FORBIDDEN, response, { message:roleType.toUpperCase()+ " " + messages.URL_ACCESS_TEXT });
//         // next middleware.
//         next();
//     } catch (ex) {
//         console.log(messages.AUTHORIZATION_TEXT);
//         return handleResponse(statusCode.UNAUTHORIZED, response, { message: messages.TOKEN_INVALID_TEXT });
//     }
// }

// // Default export
// module.exports = { authentication, authorization };