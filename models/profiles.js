module.exports = function(sequelize, DataTypes) {
	const profile = sequelize.define('profile', {
		uuid: {
			type 	: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
    		primaryKey: true,
			allowNull: false,
		},
		user_uuid: {
			type 	: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
    		primaryKey: true,
			allowNull: false
		},
		post_count: {
			type: DataTypes.TINYINT(10),
			allowNull: false,
			defaultValue: 0
		},
	});

	profile.sync();
	return profile;
}