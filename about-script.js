document.addEventListener('DOMContentLoaded', () => {
    const projectTitles = document.querySelectorAll('.project-title');
    const projectDetails = document.querySelectorAll('.project-details');

    let sortedColumn = 'date';  // Default sort column
    let ascending = false;  // Default sort order for dates (descending)

    const gradeOrder = { 'In-Progress': 1, 'P': 2, 'B': 3, 'A': 4 };

    let coursesList = [
        { name: "Introduction to Computer Engineering", grade: "A", languages: "Arduino C", category: "Software Engineering", date: "Fall 2022" },
        { name: "Introduction to Systems Software", grade: "A", languages: "C, x86-64 Assembly", category: "Computer Systems", date: "Fall 2022" },
        { name: "Introduction to Machine Learning and Pattern Classification", grade: "A", languages: "Python", category: "AI/ML", date: "Spring 2023" },
        { name: "Introduction to Data Science", grade: "A", languages: "Python", category: "AI/ML", date: "Spring 2023" },
        { name: "Seminar: Data Structures and Algorithms", grade: "P", languages: "C++", category: "Algorithms", date: "Spring 2023" },
        { name: "Object-Oriented Software Development Laboratory", grade: "A", languages: "C++", category: "Software Engineering", date: "Spring 2023" },
        { name: "Introduction to Artificial Intelligence", grade: "A", languages: "Python", category: "AI/ML", date: "Spring 2023" },
        { name: "Multi-Paradigm Programming in C++", grade: "A", languages: "C++", category: "Software Engineering", date: "Fall 2023" },
        { name: "Introduction to Computer Security", grade: "A", languages: "C, x86-64 Assembly", category: "Cybersecurity", date: "Fall 2023" },
        { name: "Reverse Engineering and Malware Analysis", grade: "A", languages: "C, x86-64 Assembly", category: "Cybersecurity", date: "Fall 2023" },
        { name: "Operating Systems Organization", grade: "A", languages: "C", category: "Computer Systems", date: "Spring 2024" },
        { name: "Computer Vision", grade: "A", languages: "Python", category: "AI/ML, Computer Vision", date: "Spring 2024" },
        { name: "Recent Advances in Computer Security and Privacy", grade: "A", languages: "C, x86-64 Assembly, Python", category: "Cybersecurity, AI/ML, Computer Vision", date: "Spring 2024" },
        { name: "Applications of Deep Neural Networks", grade: "A", languages: "Python", category: "AI/ML, Computer Vision", date: "Spring 2024" },
        { name: "Video Game Programming", grade: "In-Progress", languages: "C#", category: "Game Development", date: "Fall 2024" },
        { name: "Systems Security", grade: "In-Progress", languages: "C, x86-64 Assembly", category: "Cybersecurity", date: "Fall 2024" },
        { name: "Algorithms for Nonlinear Optimization", grade: "In-Progress", languages: "Python", category: "AI/ML", date: "Fall 2024" },
        { name: "Advances in Computer Vision", grade: "In-Progress", languages: "Python", category: "AI/ML, Computer Vision", date: "Fall 2024" },
        { name: "Intro to Modeling & Programming", grade: "A", languages: "Java", category: "Software Engineering", date: "Fall 2018" },
        { name: "Data Structures", grade: "A", languages: "Java", category: "Algorithms", date: "Spring 2019" },
        { name: "Computer Systems/Organization", grade: "A", languages: "C, x86-64 Assembly", category: "Computer Systems", date: "Fall 2019" },
        { name: "Multimedia Programming & Design", grade: "A", languages: "Java, Processing", category: "Software Engineering", date: "Fall 2019" },
        { name: "Introduction to Cybersecurity and Cryptography", grade: "A", languages: "C", category: "Cybersecurity", date: "Spring 2020" },
        { name: "Data Mining", grade: "A", languages: "R", category: "AI/ML", date: "Fall 2020" },
        { name: "Operating Systems", grade: "A", languages: "C", category: "Computer Systems", date: "Spring 2021" },
        { name: "Analysis of Algorithms", grade: "B", languages: "Java, C", category: "Algorithms", date: "Fall 2021" },
        { name: "Database Design w/ Web Apps", grade: "B", languages: "PHP, HTML", category: "Software Engineering", date: "Spring 2022" },
        { name: "Video Game Design (Independent Study)", grade: "A", languages: "C#", category: "Game Development", date: "Spring 2022" },
        { name: "Calculus I", grade: "A", languages: "N/A", category: "Math", date: "Fall 2016" },
        { name: "Calculus II", grade: "B", languages: "N/A", category: "Math", date: "Spring 2019" },
        { name: "Multidimensional Calculus", grade: "A", languages: "N/A", category: "Math", date: "Fall 2019" },
        { name: "Differential Equations", grade: "A", languages: "N/A", category: "Math", date: "Spring 2020" },
        { name: "Linear Algebra (Matrix Algebra)", grade: "A", languages: "N/A", category: "Math", date: "Fall 2020" },
        { name: "Probability and Statistics", grade: "P", languages: "N/A", category: "Math", date: "Fall 2020" },
        { name: "Discrete Math Structures", grade: "A", languages: "N/A", category: "Math", date: "Spring 2021" },
        { name: "Elementary Statistics", grade: "A", languages: "N/A", category: "Math", date: "Spring 2022" }
    ];

    projectTitles.forEach(title => {
        title.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove 'selected' class from all titles and add to the clicked one
            projectTitles.forEach(item => item.classList.remove('selected'));
            title.classList.add('selected');

            const contentId = title.getAttribute('data-content');
            projectDetails.forEach(detail => {
                if (detail.id === contentId) {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            });

            // Display courses if the "Courses Taken" section is clicked
            if (contentId === 'courses-content') {
                displayCourses();
            }
        });
    });

    // Ensure Resume is selected on load
    document.querySelector('.project-title.selected').classList.add('selected');
    document.querySelector('.project-details').style.display = 'block';

    function displayCourses() {
        const coursesContent = document.getElementById('courses-content');

        // Buttons configuration
        const allowedLanguages = ["C", "C#", "C++", "Java", "Python", "x86-64 Assembly"];
        const categories = ["Computer Systems", "AI/ML", "Algorithms", "Software Engineering", "Cybersecurity", "Game Development", "Computer Vision", "Math"];

        // Create filter buttons
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('toggle-buttons');

        // Add filters label
        const filtersLabel = document.createElement('h2');
        filtersLabel.textContent = 'Filters';
        buttonsContainer.appendChild(filtersLabel);

        const filterButtonsContainer = document.createElement('div');
        filterButtonsContainer.classList.add('filter-buttons-container');

        const languagesContainer = document.createElement('div');
        languagesContainer.classList.add('row');
        const categoriesContainer = document.createElement('div');
        categoriesContainer.classList.add('row');

        // Add labels
        const languageLabel = document.createElement('span');
        languageLabel.classList.add('label');
        languageLabel.textContent = 'Languages:';
        languagesContainer.appendChild(languageLabel);

        const categoryLabel = document.createElement('span');
        categoryLabel.classList.add('label');
        categoryLabel.textContent = 'Categories:';
        categoriesContainer.appendChild(categoryLabel);

        // Language buttons
        allowedLanguages.forEach(language => {
            const button = document.createElement('button');
            button.classList.add('toggle-btn');
            button.innerText = language;
            button.setAttribute('data-type', 'languages');
            button.setAttribute('data-value', language);
            languagesContainer.appendChild(button);
        });

        // Category buttons
        categories.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('toggle-btn');
            button.innerText = category;
            button.setAttribute('data-type', 'category');
            button.setAttribute('data-value', category);
            categoriesContainer.appendChild(button);
        });

        filterButtonsContainer.appendChild(languagesContainer);
        filterButtonsContainer.appendChild(categoriesContainer);

        buttonsContainer.appendChild(filterButtonsContainer);

        // Create table elements
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th class="sortable" data-sort="name">Course Name<span class="arrow"></span></th>
                    <th class="sortable" data-sort="grade">Grade<span class="arrow"></span></th>
                    <th class="sortable" data-sort="languages">Languages Used<span class="arrow"></span></th>
                    <th class="sortable" data-sort="category">Category<span class="arrow"></span></th>
                    <th class="sortable sorted" data-sort="date">Date Taken<span class="arrow arrow-down"></span></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        const tbody = table.querySelector('tbody');

        // Function to populate table rows
        function populateTable(courses) {
            tbody.innerHTML = '';
            courses.forEach(course => {
                const tr = document.createElement('tr');
                tr.setAttribute('data-languages', course.languages);
                tr.setAttribute('data-category', course.category);
                tr.innerHTML = `
                    <td>${course.name}</td>
                    <td>${course.grade}</td>
                    <td>${formatLanguages(course.languages)}</td>
                    <td>${formatCategories(course.category)}</td>
                    <td>${course.date}</td>
                `;
                tbody.appendChild(tr);
            });
            applyFilters();  // Apply filters after populating the table
        }

        // Function to format and sort languages
        function formatLanguages(languages) {
            const activeFilters = getActiveFilters('languages');
            return languages.split(', ').sort((a, b) => {
                const isActiveA = activeFilters.includes(a);
                const isActiveB = activeFilters.includes(b);
                if (isActiveA && !isActiveB) return -1;
                if (!isActiveA && isActiveB) return 1;
                return a.localeCompare(b);
            }).map(lang => {
                const isActive = activeFilters.includes(lang);
                return `<span class="language-button ${isActive ? 'active' : ''}">${lang}</span>`;
            }).join('');
        }

        // Function to format and sort categories
        function formatCategories(categories) {
            const activeFilters = getActiveFilters('category');
            return categories.split(', ').sort((a, b) => {
                const isActiveA = activeFilters.includes(a);
                const isActiveB = activeFilters.includes(b);
                if (isActiveA && !isActiveB) return -1;
                if (!isActiveA && isActiveB) return 1;
                return a.localeCompare(b);
            }).map(cat => {
                const isActive = activeFilters.includes(cat);
                return `<span class="category-button ${isActive ? 'active' : ''}">${cat}</span>`;
            }).join('');
        }

        function getActiveFilters(type) {
            const activeFilters = [];
            document.querySelectorAll(`.toggle-btn.active[data-type="${type}"]`).forEach(btn => {
                activeFilters.push(btn.getAttribute('data-value'));
            });
            return activeFilters;
        }

        // Function to sort courses
        function sortCourses(courses, key, ascending = true) {
            const activeFilters = getActiveFilters(key);
            return courses.sort((a, b) => {
                // Check for exact matches first
                const aMatchesFilter = activeFilters.every(filter => a[key].includes(filter));
                const bMatchesFilter = activeFilters.every(filter => b[key].includes(filter));

                if (aMatchesFilter && !bMatchesFilter) return -1;
                if (!aMatchesFilter && bMatchesFilter) return 1;

                // Regular sorting otherwise
                if (key === 'date') {
                    return compareDates(a[key], b[key]) * (ascending ? 1 : -1);  // Change for correct order
                } else if (key === 'grade') {
                    const comparison = gradeOrder[a[key]] - gradeOrder[b[key]];
                    return (ascending ? 1 : -1) * comparison; // Ascending or descending based on value of ascending
                } else {
                    const valueA = a[key].toLowerCase();
                    const valueB = b[key].toLowerCase();
                    return (valueA < valueB ? -1 : valueA > valueB ? 1 : 0) * (ascending ? 1 : -1);
                }
            });
        }

        // Function to compare dates
        function compareDates(dateA, dateB) {
            const [semesterA, yearA] = dateA.split(' ');
            const [semesterB, yearB] = dateB.split(' ');

            if (yearA === yearB) {
                return semesterA === 'Fall' && semesterB === 'Spring' ? -1 : 1;
            }
            return yearB - yearA;
        }

        // Clear previous content and append the new buttons and table
        coursesContent.innerHTML = '<h1>Courses Taken</h1>';
        coursesContent.appendChild(buttonsContainer);
        coursesContent.appendChild(table);

        // Initial sort on page load
        coursesList = sortCourses(coursesList, sortedColumn, ascending);
        populateTable(coursesList);

        // Function to apply filters
        function applyFilters() {
            const rows = document.querySelectorAll('tbody tr');
            const activeFilters = {
                languages: getActiveFilters('languages'),
                category: getActiveFilters('category')
            };

            const filtersActive = activeFilters.languages.length > 0 || activeFilters.category.length > 0;

            rows.forEach(row => {
                const rowLanguages = row.getAttribute('data-languages').split(', ');
                const rowCategories = row.getAttribute('data-category').split(', ');

                const isVisible = !filtersActive || (
                    (activeFilters.languages.length === 0 || rowLanguages.some(lang => activeFilters.languages.includes(lang))) &&
                    (activeFilters.category.length === 0 || rowCategories.some(cat => activeFilters.category.includes(cat)))
                );

                row.style.display = isVisible ? '' : 'none';
                row.querySelectorAll('.language-button, .category-button').forEach(button => {
                    const value = button.textContent;
                    if (activeFilters.languages.includes(value) || activeFilters.category.includes(value)) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                });
            });
        }

        // Event listener for buttons to toggle visibility
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');  // Toggle the visual state
                populateTable(coursesList);  // Reapply filtering after toggling
            });
        });

        // Event listener for sortable table headers
        const sortableHeaders = document.querySelectorAll('.sortable');
        sortableHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const sortKey = header.getAttribute('data-sort');
                if (sortedColumn === sortKey) {
                    ascending = !ascending;  // Toggle sort order
                } else {
                    sortedColumn = sortKey;
                    ascending = sortKey !== 'date' || !ascending;  // Toggle for 'date' on first click, `ascending` otherwise
                }
                coursesList = sortCourses(coursesList, sortKey, ascending);
                populateTable(coursesList);  // Reapply filtering after sorting

                sortableHeaders.forEach(h => {
                    h.classList.remove('sorted');
                    h.querySelector('.arrow').className = 'arrow';
                });
                header.classList.add('sorted');
                const arrow = header.querySelector('.arrow');
                arrow.classList.add(ascending ? 'arrow-up' : 'arrow-down');
            });
        });

        // Highlight the sorted column and set the appropriate arrow
        const initialSortedHeader = document.querySelector(`th[data-sort="${sortedColumn}"]`);
        initialSortedHeader.classList.add('sorted');
        initialSortedHeader.querySelector('.arrow').classList.add('arrow-down');
    }

    // Load the correct section
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const targetTitle = document.querySelector(`.project-title[data-content="${hash}-content"]`);
        if (targetTitle) {
            targetTitle.click();
        }
    }
});