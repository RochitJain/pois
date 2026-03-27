const skills = [
  'python',
  'fastapi',
  'flask',
  'docker',
  'kubernetes',
  'aws',
  'postgresql',
  'redis',
  'node',
  'react',
  'mongodb',
  'sql',
  'rest',
  'microservices',
  'ci/cd'
];
function extractSkills(job_description) {
    const desc = job_description.toLowerCase();
    const matchedSkills = [];
    for(let skill of skills){
        if(desc.includes(skill))
            matchedSkills.push(skill);
    }
        return matchedSkills
    }


module.exports = {extractSkills}


