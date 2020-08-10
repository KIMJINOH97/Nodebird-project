module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'hashtag',
        {
            title: {
                type: DataTypes.STRING(15),
                allowNull: false,
                unique: true,
            },
        },
        {
            timestamps: true,
            paranoid: true,
        }
    );
};
// #노드 #익스프레스 고유해야함.
