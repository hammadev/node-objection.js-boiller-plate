import { QueryBuilder } from 'objection';

export default class SoftDeleteQueryBuilder extends QueryBuilder {
  constructor(modelClass) {
    super(modelClass);
    this.onBuild(builder => {
      if (!builder.context().withDeleted) {
        builder.whereNull(`${modelClass.tableName}.deleted_at`);
      }
    });
  }

  withDeleted() {
    this.context({ withDeleted: true });
    return this;
  }
}