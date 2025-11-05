export const home = (req, res) => res.render('home', { title: 'Welcome' });

export const courses = (req, res) => {
  const items = [
    { title: 'Italian Cooking', level: 'Beginner' },
    { title: 'Sushi Basics', level: 'Intermediate' }
  ];
  res.render('courses', { title: 'Courses', items });
};

export const contact = (req, res) => res.render('contact', { title: 'Contact' });

export const submitContact = (req, res) => {
  const { name } = req.body || {};
  res.render('contact', {
    title: 'Contact',
    message: `Thanks${name ? ', ' + name : ''}! We will reach out.`
  });
};
