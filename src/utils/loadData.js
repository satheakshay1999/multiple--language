// utils/loadData.js

export async function loadData() {
    const response = await fetch('../../public/locales/en/trasnlation.json'); // Adjust the URL as needed
    if (!response.ok) {
      throw new Error('Failed to load JSON data');
    }
    return response.json();
  }
  