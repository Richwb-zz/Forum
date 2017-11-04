module.exports = function(sequelize, DataTypes) {
	const forum = sequelize.define('forum', {
		uuid: {
			type 	: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
    		primaryKey: true,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 20],
					msg: 'Username length must be between 8 and 25 characters'
				}
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [8, 25],
					msg: 'Password length must be between 8 and 25 characters'
				}
			}
		},
		Firstname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 25],
					msg: 'first Name length must be between 1 and 25 characters'
				}
			}
		},
		Lastname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 25],
					msg: 'Last Name length must be between 1 and 25 characters'
				}
			}
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 50],
					msg: 'Last Name length must be between 1 and 25 characters'
				}
			}
		}
	});

	forum.sync();
	return forum;
}