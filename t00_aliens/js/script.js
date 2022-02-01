const alienSpecies = {
    name: prompt('Enter the name of the species','Nuclear'),
    leader: prompt('Enter the name of the leader of the aliens','Don di bon'), 
    resources: prompt('Enter the name of natural resources that the aliens have','solt, crystal, stones, cloudball').split(','),
    resourcesCount: 0,
    agenda: prompt('Enter describing what are the goals and ideas of the aliens','They seek to colonize planets with water'),
    isHostile: Boolean(hostileHumans(prompt('Species is hostile to humans, yes/no?','yes')))
};
alienSpecies.resourcesCount = alienSpecies.resources.length;

alert(`Here\'s the alien species:\n` +
Object.keys(alienSpecies)[0] + ` - ${alienSpecies.name}\n` +
Object.keys(alienSpecies)[1] + ` - ${alienSpecies.leader}\n` +
Object.keys(alienSpecies)[2] + ` - ${alienSpecies.resources}\n` +
Object.keys(alienSpecies)[3] + ` - ${alienSpecies.resourcesCount}\n` +
Object.keys(alienSpecies)[4] + ` - ${alienSpecies.agenda}\n` +
Object.keys(alienSpecies)[5] + ` - ${alienSpecies.isHostile}`);

function hostileHumans(answers) {
    switch (answers) {
        case 'yes':
            return true;
        case 'no':
            return false;
    }
}