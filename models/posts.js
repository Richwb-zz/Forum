module.exports = function(sequelize, DataTypes) {
	const posts= sequelize.define('posts', {
		uuid: {
			type 	: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
    		primaryKey: true,
			allowNull: false,
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
		thread_uuid: {
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
	});

	thread.sync();
	return thread;
}