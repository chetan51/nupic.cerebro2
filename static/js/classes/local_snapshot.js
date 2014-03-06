var LocalSnapshot = AbstractSnapshot.extend(function() {
    return {
        init: function(modelDimensions, activeCells, predictiveCells) {
            this.modelDimensions = modelDimensions;
            this.activeCells = activeCells;
            this.predictiveCells = predictiveCells;
        },

        /* Public */
        
        getModelDimensions: function() {
            return this.modelDimensions;
        },

        getActiveCells: function(callback) {
            callback(null, _.clone(this.activeCells));
        },

        getPredictiveCells: function(callback) {
            callback(null, _.clone(this.predictiveCells));
        }
    };
});