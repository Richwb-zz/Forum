module.exports = function(sequelize, DataTypes) {
	const thread = sequelize.define('thread', {
		uuid: {
			type 	: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
    		primaryKey: true,
			allowNull: false,
		},
		thread_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 100],
					msg: 'Thread Name length must be between 1 and 100 characters'
				}
			}
		},
		created_By: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 20],
					msg: 'User Name length must be between 1 and 20 characters'
				}
			}
		},
		last_poster: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 20],
					msg: 'last poster length must be between 1 and 20 characters'
				}
			}
		},
		last_post_date: {
			type: DataTypes.DATE,
			allowNull: false
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

	thread.sync();
	return thread;
}