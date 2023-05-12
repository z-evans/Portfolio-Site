export default {
  pages: {
    home: "/",
    about: "/about",
    experience: "/expierence",
    projects: "/projects",
    blog: "/blog",
    blogPost: (num: string) => `/blog/${num}`,
  },
};
