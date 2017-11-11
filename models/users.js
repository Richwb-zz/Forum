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
			validate: {
				len: {
					args: [8, 25],
					msg: 'Password length must be between 8 and 25 characters'
				}
			}
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
		underscored: true,
		freezeTableName: true
	});

	users.associate = function(models){
		users.hasMany(models.posts, {
			foreignKey: {
				name: "created_by",
				allowNull: false
			}
		});
		
		users.hasMany(models.threads, {
			foreignKey: {
				name: "created_by",
				allowNull: false
			}
		});

		users.hasOne(models.profiles, {
			foreignKey: {
				allowNull: false
			}
		});
	}

	return users;
}