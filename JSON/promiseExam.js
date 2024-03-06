// nơi lưu trữ
var users = [
    {
        id: 1,
        name: 'Hoang Giang',
    },
    {
        id: 2,
        name: 'Phuong Ha',
    },
    {
        id: 3,
        name: 'Mobi EOC',
    },
    //...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Video hay',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Cảm ơn nhé',
    },
    {
        id: 3,
        user_id: 1,
        content: 'Vâng ạ',
    },
];

// 1.Gọi api để lấy comment
// 2.Từ comment lấy ra user_id
// 3.Từ user_id lấy ra user tương ứng

// Fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

getComments()
    .then(function(comments) {
        //dùng map để lấy user_id trong mảng comment
        var userIDs = comments.map(function(comment) {
            return comment.user_id;
        })
        // console.log(userIDs);
        return getUsersByIds(userIDs)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');

        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });

        commentBlock.innerHTML = html;
    })

    // lấy id qua user_id
function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        })
        setTimeout(function() {
            resolve(result);
        }, 1000);
    }, 1000);
}

