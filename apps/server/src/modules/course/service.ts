export const formatCourse = <Course extends { readonly price: unknown }>(
  course: Course,
) => ({
  ...course,
  price: Number(course.price).toFixed(2),
});
