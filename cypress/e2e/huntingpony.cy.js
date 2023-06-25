describe('Тестирование HuntingPony', function () {

    it('Оформление заказа', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="5"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="341567264"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click().wait(300);
         
         cy.get('.add-cart-counter__btn').click().wait(300);
         cy.get('[data-add-cart-counter-plus=""]').click({force: true}).wait(300);
         cy.get('.header__cart > .icon > .header__control-bage').contains('2');
         cy.get('.header__cart > .icon').click().wait(300);
         cy.get('.cart-controls > .button').click();
         cy.get('#client_surname').type('Smirnov');
         cy.get('#client_contact_name').type('Sergey');
         cy.get('#client_phone').type('112');
         cy.get('#client_email').type('german@dolnikov.ru');
         cy.get('#shipping_address_country').select('Казахстан');
         cy.get('#shipping_address_full_locality_name').type('Алма-Аты');
         cy.get('#shipping_address_street').type('Красных Партизан');
         cy.get('#shipping_address_house').type('33').wait(200);
         cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Девочка');
         cy.get('#order_field_24333471').type('Алиса');
         cy.get('#create_order').should('be.enabled');

    })
})