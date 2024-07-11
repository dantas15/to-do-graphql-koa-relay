export function updateFields<T>(
  target: T,
  source: Partial<T>,
  fields: (keyof T)[]
) {
  fields.forEach((field) => {
    if (source[field] !== undefined) {
      if (field === 'dueDate' || field === 'doneAt') {
        (target as any)[field] = new Date(source[field] as any);
      } else {
        (target as any)[field] = source[field];
      }
    }
  });
}
