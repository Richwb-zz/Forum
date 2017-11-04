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
					args: [10, 100],
					msg: 'Thread Name length must be between 10 and 100 characters'
				}
			}
		},
		forum_uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			allowNull: false
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
	});

	thread.sync();
	return thread;
}