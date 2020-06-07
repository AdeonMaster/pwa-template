import NamespacedLocalStorage from '../namespaced-local-storage';

describe('namespaced-local-storage', () => {
  const namespace = 'TEST';
  const storage = new NamespacedLocalStorage(namespace);

  const key = 'test';
  const namespacedKey = `_${namespace}.${key}`;

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should set item', () => {
    storage.setItem(key, 2);

    expect(window.localStorage.getItem(namespacedKey)).toBe('[2]');
  });

  it('should get item', () => {
    window.localStorage.setItem(namespacedKey, '[true]');

    expect(storage.getItem(key)).toBe(true);
  });

  it('should remove item', () => {
    window.localStorage.setItem(namespacedKey, "[['First', 'Second']]");

    storage.removeItem(key);

    expect(window.localStorage.getItem(namespacedKey)).toBe(null);
  });

  it('should clear namespace storage', () => {
    // setup items
    storage.setItem('lang', 'de');
    storage.setItem('loaded', false);

    const otherStorage = new NamespacedLocalStorage('other');
    otherStorage.setItem('age', 17);
    otherStorage.setItem('lang', 'en');

    window.localStorage.setItem('native', true);

    // clear namespace
    storage.clear();

    expect({ ...window.localStorage }).toEqual({
      '_other.age': '[17]',
      '_other.lang': '["en"]',
      native: 'true',
    });
  });
});
