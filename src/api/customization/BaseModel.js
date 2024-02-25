import { Model } from 'objection';
import SoftDeleteQueryBuilder from './SoftDeleteQueryBuilder.js';

export default class BaseModel extends Model {
  static get QueryBuilder() {
    return SoftDeleteQueryBuilder;
  }

  // Instance method for soft deleting
  softDelete() {
    return this.$query().patch({
      deleted_at: new Date().toISOString()
    });
  }

  // You might also want a static method for convenience
  static softDeleteById(id) {
    return this.query().patchAndFetchById(id, {
      deleted_at: new Date().toISOString()
    });
  }

  // Any other shared logic across models
}