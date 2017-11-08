module.exports = function(sequelize, DataTypes) {
	const posts= sequelize.define('posts', {
		post_id: {
			type: DataTypes.TINYINT(15),
			allowNull: false
		},
		created_by: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			allowNull: false
		},
		edited_by: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			allowNull: false
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: {
					args: [15],
					msg: 'Post must be a minimum of 15 characters'
				}
			}
		}
	},
	{
		underscored: true,
		freezeTableName: true,
		classMethods: {
			associate: function(models) {
				posts.belongsTo(models.threads,{
					foreignKey: {
						foreignKey: 'thread_id',
						allowNull: false
					}
				});

				posts.belongsTo(models.users, {
					foreignKey: {
						foreignKey: 'User_id',
						allowNull: false
					}
				});
			}
		}
	});

	posts.sync();
	return posts;
}