
    // Function to calculate the area of a triangle
    function hitungLuas() {
        var alas = parseFloat(document.getElementById("input-alas").value);
        var tinggi = parseFloat(document.getElementById("input-tinggi").value);
        var hasilLuas = 0.5 * alas * tinggi;

        // Display the result in the input field
        document.getElementById("input-luas").value = hasilLuas;

        // Display the result in the specified element
        document.getElementById("hasil-luas-text").innerText = `Hasil Luas Segitiga: ${hasilLuas}`;
    }

    // Function to calculate the perimeter of a triangle
    function hitungKeliling() {
        var sisiA = parseFloat(document.getElementById("input-sisi-a").value);
        var sisiB = parseFloat(document.getElementById("input-sisi-b").value);
        var sisiC = parseFloat(document.getElementById("input-sisi-c").value);
        var hasilKeliling = sisiA + sisiB + sisiC;

        // Display the result in the input field
        document.getElementById("input-keliling").value = hasilKeliling;

        // Display the result in the specified element
        document.getElementById("hasil-keliling-text").innerText = `Hasil Keliling Segitiga: ${hasilKeliling}`;
    }

    // Function to reset input fields and results
    function resetForm() {
        document.getElementById("input-alas").value = "";
        document.getElementById("input-tinggi").value = "";
        document.getElementById("input-luas").value = "Hasil luas segitiga";
        document.getElementById("hasil-luas-text").innerText = "";

        document.getElementById("input-sisi-a").value = "";
        document.getElementById("input-sisi-b").value = "";
        document.getElementById("input-sisi-c").value = "";
        document.getElementById("input-keliling").value = "Hasil keliling segitiga";
        document.getElementById("hasil-keliling-text").innerText = "";
    }

