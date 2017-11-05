module.exports = function(sequelize, DataTypes) {
	const forum = sequelize.define('forum', {
		uuid: {
			type 	: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
    		primaryKey: true,
			allowNull: false,
		},
		forum_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			validate: {
				len: {
					args: [1, 50],
					msg: 'Forum Name length must be between 1 and 50 characters'
				}
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [10, 255],
					msg: 'Password length must be between 10 and 255 characters'
				}
			}
		},
	});

	forum.sync();
	return forum;
}