module.exports = function(sequelize, DataTypes) {
	const profiles = sequelize.define('profiles', {
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
	}{
		underscored: true,
		freezeTableName: true,
		classMethods: {
			associate: function(models) {
				profiles.hasMany(models.threads)
			}
		}
	}{
		underscored: true,
		freezeTableName: true,
		classMethods: {
			associate: function(models) {
				profiles.belongTo(models.users);
			}
		}
	});

	profile.sync();
	return profile;
}