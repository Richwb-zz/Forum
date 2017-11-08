module.exports = function(sequelize, DataTypes) {
	const profiles = sequelize.define('profiles', {
		post_count: {
			type: DataTypes.TINYINT(10),
			allowNull: false,
			defaultValue: 0
		},
	},
	{
		underscored: true,
		freezeTableName: true
	});

	profiles.associate = function(models){
		profiles.belongsTo(models.users);
	}

	return profiles;
}