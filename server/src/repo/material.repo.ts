import { IMaterial } from '../../../shared/types';
import db from '../../utils/database/dbClient';

export const getAll = () => {
  return new Promise((resolve) => {
    db.all(
      `SELECT * FROM materials`,
      function (error: Error, materials: IMaterial[]) {
        if (error) throw error;
        resolve(materials);
      }
    );
  });
};

export const insert = (material: IMaterial) => {
  return new Promise((resolve) => {
    const { name, color, volume, cost, deliveryDate } = material;

    db.run(
      `INSERT INTO materials (name, color, volume, cost, deliveryDate) VALUES (?, ? ,?, ?, ?) `,
      [name, color, volume, cost, deliveryDate],
      function (error: any) {
        if (error) throw error;

        // Send back inserted Id
        resolve(this.lastID);
      }
    );
  });
};

export const update = (material: IMaterial) => {
  return new Promise((resolve) => {
    const { name, color, volume, cost, deliveryDate, id } = material;

    db.run(
      ` UPDATE materials 
            SET name = ?, color = ?, volume = ?, cost = ?, deliveryDate = ? 
            WHERE id = ? `,
      [name, color, volume, cost, deliveryDate, id],
      function (error: any) {
        if (error) throw error;
        resolve(true);
      }
    );
  });
};

export const remove = (id: number) => {
  return new Promise((resolve) => {
    db.run(`DELETE FROM materials WHERE id = ?`, [id], function (error: any) {
      if (error) throw error;
      resolve(true);
    });
  });
};
