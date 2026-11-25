//메일 전송 코드 
 
 (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "4618jB507DnvMREA4",
            });
        })();


        document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_uisvptz', 'template_y64vo5d', this)
                    .then(() => {
                        console.log('SUCCESS!');
                        alert('메일 전송에 성공하였습니다.');
                }, (error) => {
                        console.log('FAILED...', error);
                        alert('메일 전송에 실패하였습니다.');
                });
        });