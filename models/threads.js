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
		last_poster: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			allowNull: false
		},
		last_post_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
	},
	{
		underscored: true,
		freezeTableName: true
	});

	threads.associate = function(models) {
		threads.hasMany(models.posts);
		
		threads.belongsTo(models.users,{
			foreignKey: {
				name: "created_by",
				allowNull: false
			}
		});

		threads.belongsTo(models.forums,{
			foreignKey: {
				allowNull: false
			}
		});
	}

	return threads;
}