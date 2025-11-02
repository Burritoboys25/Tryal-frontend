export class APIFieldError extends Error {
  fieldErrors: Record<string, string[]>;

  constructor(message: string, fieldErrors: Record<string, string[]>) {
    super(message);
    this.name = 'APIFieldError';
    this.fieldErrors = fieldErrors;
  }
}