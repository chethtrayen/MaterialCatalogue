import {
  colorValidation,
  dateValidation,
  numberValidation,
  stringValidation
} from '../utils/validation';
import { dateFormatter } from './support/utils';

describe('Color validation', () => {
  describe('Given a color hex', () => {
    it('should be valid ', () => {
      expect(colorValidation('#FFF')).toBeTruthy;
    });
  });

  describe('Given a bad hex color code', () => {
    it('should be invalid ', () => {
      expect(colorValidation('red')).toBeFalsy;
    });

    it('should be invalid ', () => {
      expect(colorValidation('#F')).toBeFalsy;
    });

    it('should be invalid ', () => {
      expect(colorValidation('#FFFFFFF')).toBeFalsy;
    });
  });
});

describe('Date validation', () => {
  describe('Given a date after today', () => {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = dateFormatter(tomorrowDate);

    it('should be valid ', () => {
      expect(dateValidation(tomorrow)).toBeTruthy;
    });
  });

  describe('Given a bad date', () => {
    const yetserdayDate = new Date();
    yetserdayDate.setDate(yetserdayDate.getDate() - 1);
    const yetserday = dateFormatter(yetserdayDate);

    it('should be invalid ', () => {
      expect(dateValidation(yetserday)).toBeFalsy;
    });

    it('should be invalid ', () => {
      expect(dateValidation('not a date')).toBeFalsy;
    });
  });
});

describe('String validation', () => {
  describe('Given a string with length greater than 0', () => {
    it('should be valid ', () => {
      expect(stringValidation('test')).toBeTruthy;
    });
  });

  describe('Given a empty string', () => {
    it('should be invalid ', () => {
      expect(stringValidation('')).toBeFalsy;
    });
  });
});

describe('Number validation', () => {
  describe('Given a number greater than 0', () => {
    it('should be valid ', () => {
      expect(numberValidation(1)).toBeTruthy;
    });
  });

  describe('Given a number less than 1', () => {
    it('should be invalid ', () => {
      expect(numberValidation(0)).toBeFalsy;
    });
  });
});
