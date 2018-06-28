const faker = require('faker');

class DataTableFaker {
  constructor(size) {
    this.size = size || 100;
    this.cache = [];
  }

  createFakeRowData = index => ({
    id: index + 1,
    name: faker.name.findName(),
    position: faker.name.jobTitle(),
    office: faker.address.city(),
    age: 30,
    start_date: '2008/11/28',
    salary: '$162,000',
  });

  getObjectAt = (/* number */ index /* ?object */) => {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.cache[index] === undefined) {
      this.cache[index] = this.createFakeRowData(index);
    }
    return this.cache[index];
  };

  /**
  * Populates the entire cache with data.
  * Use with Caution! Behaves slowly for large sizes
  * ex. 100,000 rows
  */
  getAll() {
    if (this.cache.length < this.size) {
      for (let i = 0; i < this.size; i += 1) {
        this.getObjectAt(i);
      }
    }
    return this.cache.slice();
  }

  getSize() {
    return this.size;
  }
}

module.exports = DataTableFaker;
