function getGrade(score) {
  let grade, i, j;
  j = 25;
  for (i = 0; i < 6; i++) {
    // Conditional if statement checks if score is greater than 25
    if (score > j && score <= j + 5) {
      grade = String.fromCharCode(65 + i);
      break;
    }
    j = j - 5;
  }
  return grade;
}
