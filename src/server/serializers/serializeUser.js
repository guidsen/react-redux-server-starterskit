function serializeUser(userModel) {
  return {
    id: userModel.get('id'),
    fullName: userModel.get('firstName') + ' ' + userModel.get('lastName'),
    firstName: userModel.get('firstName'),
    lastName: userModel.get('lastName'),
    createdAt: userModel.get('created_at'),
  };
}

function serializeUsers(userModels) {
  return userModels.map(user => serializeUser(user));
}

module.exports = { serializeUser, serializeUsers };
