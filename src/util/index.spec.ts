import { describe, it, expect } from 'vitest';
import { deepDefaults } from '@/util/index';

describe('utilities', () => {
  describe('deepDefaults', () => {
    it('returns a new object and does not mutate the original target', () => {
      const target = { a: 'foo', b: 2, c: false, d: 'bar' };
      const source = {};

      const result = deepDefaults(target, source);
      expect(result).not.toBe(target);
      expect(result).toEqual(target);
    });

    it('overrides values in a flat object with one source', () => {
      const target = { a: 'foo', b: 2, c: false, d: 'bar' };
      const source = { b: 3, c: true, d: 'baz' };

      const result = deepDefaults(target, source);
      expect(result).toEqual({ a: 'foo', b: 3, c: true, d: 'baz' });
    });

    it('overrides values in a flat array with one source', () => {
      const target = [ 'foo', 'bar', 'qux' ];
      const source = [ 'baz', 'bar' ];

      const result = deepDefaults(target, source);
      expect(result).toEqual([ 'baz', 'bar', 'qux' ]);
    });

    it('overrides values in a flat object with two sources', () => {
      const target = { a: 'foo', b: 2, c: false, d: 'bar' };
      const source1 = { b: 3, c: true, d: 'baz' };
      const source2 = { b: 4, e: 'qux' };

      const result = deepDefaults(target, source1, source2);
      expect(result).toEqual({ a: 'foo', b: 4, c: true, d: 'baz', e: 'qux' });
    });

    it('overrides values in a flat array with two sources', () => {
      const target = [ 'foo', 'bar', 'qux' ];
      const source1 = [ 'baz', 'bar' ];
      const source2 = [ 'quux' ];

      const result = deepDefaults(target, source1, source2);
      expect(result).toEqual([ 'quux', 'bar', 'qux' ]);
    });

    it('overrides values in a complex object with one source', () => {
      const target = {
        a: 'foo',
        b: 'bar',
        c: {
          d: {
            e: 'baz',
            f: 'qux',
          },
          g: true,
          h: 'quux',
        },
        i: 'quuz',
      };
      const source = {
        b: 'bar',
        c: {
          d: {
            e: 'grault',
          },
          g: false,
        },
        i: 'corge',
      };

      const result = deepDefaults(target, source);
      expect(result).toEqual({
        a: 'foo',
        b: 'bar',
        c: {
          d: {
            e: 'grault',
            f: 'qux',
          },
          g: false,
          h: 'quux',
        },
        i: 'corge',
      });
    });

    it('overrides values in a complex array with one source', () => {
      const target = [ 'foo', [ 'baz', [ 'qux' ] ], 'bar' ];
      const source = [ 'quux', [ 'baz', [ 'quuz' ] ] ];

      const result = deepDefaults(target, source);
      expect(result).toEqual([ 'quux', [ 'baz', [ 'quuz' ] ], 'bar' ]);
    });

    it('overrides values in a complex object containing an array with one source', () => {
      const target = {
        a: 'foo',
        b: 'bar',
        c: {
          d: [
            'baz',
            'qux',
          ],
          e: true,
          f: [ { g: 'quux' } ],
        },
        h: 'quuz',
      };
      const source = {
        a: 'corge',
        c: {
          d: [
            'baz',
            'grault',
            'garply',
          ],
          f: [ { g: 'waldo' }, { g: 'quux' } ],
        },
      };

      const result = deepDefaults(target, source);
      expect(result).toEqual({
        a: 'corge',
        b: 'bar',
        c: {
          d: [
            'baz',
            'grault',
            'garply',
          ],
          e: true,
          f: [ { g: 'waldo' }, { g: 'quux' } ],
        },
        h: 'quuz',
      });
    });

    it('overrides values in a complex object containing an array with multiple sources', () => {
      const target = {
        a: 'foo',
        b: 'bar',
        c: {
          d: [
            'baz',
            'qux',
          ],
          e: true,
          f: [ { g: 'quux' } ],
        },
        h: 'quuz',
      };
      const source1 = {
        a: 'corge',
        c: {
          d: [
            'baz',
            'grault',
            'garply',
          ],
          f: [ { g: 'waldo' }, { g: 'quux' } ],
        },
      };
      const source2 = {
        c: {
          d: [
            'fred',
          ],
          e: false,
          f: [ { g: 'quux' }, { g: 'waldo' } ],
        },
      };

      const result = deepDefaults(target, source1, source2);
      expect(result).toEqual({
        a: 'corge',
        b: 'bar',
        c: {
          d: [
            'fred',
            'grault',
            'garply',
          ],
          e: false,
          f: [ { g: 'quux' }, { g: 'waldo' } ],
        },
        h: 'quuz',
      });
    });
  });
});
