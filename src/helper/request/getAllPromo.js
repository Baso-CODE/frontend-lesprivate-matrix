// src/services/kotaService.js

import { baseUrlClient } from "../config";

export async function getAllPromo() {
  try {
    const response = await fetch(`${baseUrlClient}/promo/all`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get promo");
    }

    return result;
  } catch (error) {
    console.error("Error get promo", error);
    throw error;
  }
}
