const express = require('express');

const UserController = require('../../contollers/user-controller');
const {AuthRequestValidators} =  require('../../middlewares/index');

const router = express.Router();

router.post(
    '/signup',
    AuthRequestValidators.ValidateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestValidators.ValidateUserAuth,
    UserController.signIn
);
router.get(
    '/isAuthenticated',
    UserController.isAunthenticated
)
router.get(
    '/isAdmin',
    AuthRequestValidators.validateIsAdminRequest,
    UserController.isAdmin
)


module.exports = router;