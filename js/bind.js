$(document).ready(function () {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
        ];
        data = {
                items: [
                        {
                                "date": "03/10/2015",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."
                        },
                        {
                                "date": "03/26/2015",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."
                        },
                        {
                                "date": "05/25/2015",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."
                        },
                        {
                                "date": "07/16/2015",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."
                        },
                        {
                                "date": "11/17/2015",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus."
                        }
                ]
        }
        var flag = '0'
        var hdrstr = ''
        var desstr = ''
        $.each(data.items, function (key, val) {
                
                var d = new Date(val.date);
                hdrstr += '<li><a href="#0" data-date="' + val.date + '"';
                hdrstr += flag == '0' ? 'class="selected">' : '>';
                hdrstr += d.getDate() + ' ' + monthNames[d.getMonth()].substring(0, 3) + '</a></li>';
                

                
                desstr += flag == '0' ? '<li class="selected' : '<li';
                desstr += 'data-date="' + val.date + '">';
                desstr += '<em>' + monthNames[d.getMonth()] + '' + d.getDate(), d.getYear() + '/em>';
                desstr += '<p>' + val.description + '</p></li>';
                
                flag = '1'
        })
        $('#timehdr').append(hdrstr);
        $('#timedec').append(desstr);
});