const techList = (technologies, name) => (technologies.length > 0 ? technologies.sort().map((tech) => ({ tech, name })) : 'Vazio!');
module.exports = techList;
