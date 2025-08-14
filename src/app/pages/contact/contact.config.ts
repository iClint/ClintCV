import { ContactContentModel } from 'src/app/models/contact-config.model';

export const ContactContent: ContactContentModel = {
  title: 'Lets connect',
  description: 'Open to new opportunities, collaborations, or a quick chat.',
  links: [
    {
      icon: 'fa-solid fa-envelope contact__icon',
      url: 'mailto:clintkingston@gmail.com',
      label: 'Email',
    },
    {
      icon: 'fa-brands fa-linkedin contact__icon',
      url: 'https://www.linkedin.com/in/clintkingston/',
      label: 'LinkedIn',
    },
    {
      icon: 'fa-brands fa-github contact__icon',
      url: 'https://github.com/iClint',
      label: 'GitHub',
    },
    {
      icon: 'fa-solid fa-file contact__icon',
      url: 'documents/Clint_Kingston_Resume-Current.pdf',
      label: 'Download Resume (Software Engineering)',
    },
  ],
};
