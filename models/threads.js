module.exports = function(sequelize, DataTypes) {
	const threads = sequelize.define('threads', {
		thread_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			validate: {
				len: {
					args: [10, 100],
					msg: 'Thread Name length must be between 10 and 100 characters'
				}
			}
		},
		created_By: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			allowNull: false
		},
		last_poster: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			allowNull: false
		},
		last_post_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
	}
	{
		underscored: true,
		freezeTableName: true,
		classMethods: {
			associate: function(models) {
				threads.hasMany(models.posts);
				threads.belongsTo(models.forum,{
					foreignKey: {
						foreignKey: 'forum_id',
						allowNull: false
					}
				});
			}
		}
	});

	thread.sync();
	return thread;
}