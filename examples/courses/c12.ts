interface DataBase {
  get(id: string): string;
  set(id: string, value: string): void;
}

class InMemoryDataBase implements DataBase {
  // private | public | protected
  private db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}
