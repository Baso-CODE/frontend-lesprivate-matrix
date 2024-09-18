// src/services/kotaService.js

import { baseUrlClient } from "../config";

export async function getAllFAQ() {
  try {
    const response = await fetch(`${baseUrlClient}/all/faq`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get faq");
    }

    return result;
  } catch (error) {
    console.error("Error get faq", error);
    throw error;
  }
}
