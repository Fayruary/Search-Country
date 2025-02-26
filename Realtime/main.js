async function searchCountry() {
    const countryName = document.getElementById('countryName').value.trim();
    
    if (!countryName) {
        alert("Masukkan nama negara!");
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 404) {
            alert("Negara tidak ditemukan.");
            return;
        }

        // Menampilkan data negara
        const country = data[0]; // Ambil negara pertama dari hasil pencarian
        document.getElementById('name').textContent = country.name.common;
        document.getElementById('region').textContent = country.region;
        document.getElementById('subregion').textContent = country.subregion;
        document.getElementById('population').textContent = country.population.toLocaleString();
        document.getElementById('area').textContent = country.area.toLocaleString() + " km²";
        document.getElementById('flag').textContent = country.flags.png ? 'Flag Available' : 'No Flag Image Available';
        
        // Jika ada gambar bendera, tampilkan gambar
        if (country.flags.png) {
            document.getElementById('flag').innerHTML = `<img src="${country.flags.png}" alt="Flag" style="width: 150px; height: auto;" />`;
        }

    } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data negara:", error);
        alert("Terjadi kesalahan saat mengambil data negara.");
    }
}
