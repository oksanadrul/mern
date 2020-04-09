const profileState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const educationState = {
  school: '',
  degree: '',
  fieldofstudy: '',
  from: '',
  to: '',
  current: false,
  description: ''
}

const experienceState = {
  company: '',
  title: '',
  location: '',
  from: new Date(),
  to: new Date(),
  current: false,
  description: ''
};

export {
  profileState,
  educationState,
  experienceState
}
