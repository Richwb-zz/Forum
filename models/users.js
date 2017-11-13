var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
	const users = sequelize.define('users', {
		uuid: {
			type 	: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
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
			type: DataTypes.STRING(25),
			allowNull: false,
		},
		firstname: {
			type: DataTypes.STRING(25),
			allowNull: false,
			validate: {
				len: {
					args: [1, 25],
					msg: 'first Name length must be between 1 and 25 characters'
				}
			}
		},
		lastname: {
			type: DataTypes.STRING(25),
			allowNull: false,
			validate: {
				len: {
					args: [1, 25],
					msg: 'Last Name length must be between 1 and 25 characters'
				}
			}
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false,
			validate: {
				len: {
					args: [1, 50],
					msg: 'Last Name length must be between 1 and 25 characters'
				}
			}
		}
	},
	{
		hooks: {
			beforeCreate: (user) => {
				const salt = bcrypt.genSaltSync(8);
				user.password = bcrypt.hashSync(user.password, salt);

			}
		},
		underscored: true,
		freezeTableName: true
	});

	users.associate = function(models){
		users.hasMany(models.threads);
		users.hasMany(models.posts);
	}

	users.prototype.validPassword = function(password){
		return bcrypt.compareSync(password, this.password);
	}


	return users;
}