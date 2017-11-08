module.exports = function(sequelize, DataTypes) {
	const forums = sequelize.define('forums', {
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
	},
	{
		underscored: true,
		freezeTableName: true,
		classMethods: {
			associate: function(models) {
				forums.hasMany(models.threads);
			}
		}
	});

	return forums;
}