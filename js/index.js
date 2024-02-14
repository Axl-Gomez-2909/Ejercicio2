document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateGrade();
  });
  
  function calculateGrade() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
  
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) ) {
      document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Por favor, ingresa valores válidos para las notas.</div>';
      return;
    }
  
    const finalGrade = (grade1+ grade2+ grade3 ) ;
    let message = '';
  
    if (finalGrade < 60) {
      message = 'Reprobado';
    } else if (finalGrade < 80) {
      message = 'Bueno';
    } else if (finalGrade < 90) {
      message = 'Muy Bueno';
    } else {
      message = 'Sobresaliente';
    }
  
    document.getElementById('result').innerHTML = `<div class="alert alert-success" role="alert">Tu nota final es: ${finalGrade.toFixed(1)}%, ${message}</div>`;
  }
  
  function clearFields() {
    document.getElementById('gradeForm').reset();
    document.getElementById('result').innerHTML = '';
  }
  