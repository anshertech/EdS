 // Global variables
        let cart = [];
        let currentProduct = null;
        let deliveryFee = 0;

        // Product data
        const products = {
            acai: [
                { id: 'acai-300', name: 'Açaí 300ml', emoji: '🍇', cashPrice: 8.90, cardPrice: 9.90, sizes: ['300ml'] },
                { id: 'acai-500', name: 'Açaí 500ml', emoji: '🍇', cashPrice: 12.90, cardPrice: 13.90, sizes: ['500ml'] },
                { id: 'acai-700', name: 'Açaí 700ml', emoji: '🍇', cashPrice: 16.90, cardPrice: 17.90, sizes: ['700ml'] },
                { id: 'acai-1l', name: 'Açaí 1L', emoji: '🍇', cashPrice: 22.90, cardPrice: 24.90, sizes: ['1L'] }
            ],
            salgadinhos: [
                { id: 'salgados-10', name: 'Salgados - 10 unidades', emoji: '🥟', cashPrice: 15.90, cardPrice: 16.90, portions: ['10 unidades'] },
                { id: 'salgados-50', name: 'Salgados - 50 unidades', emoji: '🥟', cashPrice: 65.90, cardPrice: 69.90, portions: ['50 unidades'] },
                { id: 'salgados-100', name: 'Salgados - 100 unidades', emoji: '🥟', cashPrice: 120.90, cardPrice: 129.90, portions: ['100 unidades'] },
                { id: 'salgados-congelados', name: 'Salgados Congelados', emoji: '❄️', cashPrice: 45.90, cardPrice: 49.90, portions: ['50 unidades'] }
            ],
            batata: [
                { id: 'batata-tradicional', name: 'Batata Frita Tradicional', emoji: '🍟', cashPrice: 12.90, cardPrice: 13.90 },
                { id: 'batata-rustica', name: 'Batata Rústica', emoji: '🥔', cashPrice: 14.90, cardPrice: 15.90 },
                { id: 'batata-doce', name: 'Batata Doce Frita', emoji: '🍠', cashPrice: 16.90, cardPrice: 17.90 },
                { id: 'batata-canoa', name: 'Batata Canoa', emoji: '🚤', cashPrice: 18.90, cardPrice: 19.90 },
                { id: 'batata-chips', name: 'Batata Chips', emoji: '🥨', cashPrice: 15.90, cardPrice: 16.90 },
                { id: 'batata-temperada', name: 'Batata Temperada', emoji: '🌿', cashPrice: 17.90, cardPrice: 18.90 },
                { id: 'batata-queijo', name: 'Batata com Queijo', emoji: '🧀', cashPrice: 22.90, cardPrice: 24.90 }
            ],
            bolos: [
                { id: 'bolo-chocolate', name: 'Bolo de Chocolate', emoji: '🍫', sizes: { P: { cash: 6.90, card: 7.90 }, M: { cash: 12.90, card: 13.90 }, G: { cash: 18.90, card: 19.90 } } },
                { id: 'bolo-cenoura', name: 'Bolo de Cenoura', emoji: '🥕', sizes: { P: { cash: 6.90, card: 7.90 }, M: { cash: 12.90, card: 13.90 }, G: { cash: 18.90, card: 19.90 } } },
                { id: 'bolo-coco', name: 'Bolo de Coco', emoji: '🥥', sizes: { P: { cash: 7.90, card: 8.90 }, M: { cash: 13.90, card: 14.90 }, G: { cash: 19.90, card: 20.90 } } },
                { id: 'bolo-limao', name: 'Bolo de Limão', emoji: '🍋', sizes: { P: { cash: 7.90, card: 8.90 }, M: { cash: 13.90, card: 14.90 }, G: { cash: 19.90, card: 20.90 } } },
                { id: 'bolo-frutas', name: 'Bolo de Frutas Vermelhas', emoji: '🍓', sizes: { P: { cash: 8.90, card: 9.90 }, M: { cash: 15.90, card: 16.90 }, G: { cash: 22.90, card: 23.90 } } }
            ],
            sucos: [
                { id: 'suco-laranja', name: 'Suco de Laranja', emoji: '🍊', cashPrice: 5.90, cardPrice: 6.90 },
                { id: 'suco-limao', name: 'Suco de Limão', emoji: '🍋', cashPrice: 5.90, cardPrice: 6.90 },
                { id: 'suco-maracuja', name: 'Suco de Maracujá', emoji: '💛', cashPrice: 6.90, cardPrice: 7.90 },
                { id: 'suco-acerola', name: 'Suco de Acerola', emoji: '🔴', cashPrice: 6.90, cardPrice: 7.90 },
                { id: 'suco-manga', name: 'Suco de Manga', emoji: '🥭', cashPrice: 7.90, cardPrice: 8.90 },
                { id: 'suco-abacaxi', name: 'Suco de Abacaxi', emoji: '🍍', cashPrice: 6.90, cardPrice: 7.90 }
            ],
            empadao: [
                { id: 'empadao-frango', name: 'Empadão de Frango', emoji: '🐔', cashPrice: 15.90, cardPrice: 16.90 },
                { id: 'empadao-carne', name: 'Empadão de Carne', emoji: '🥩', cashPrice: 17.90, cardPrice: 18.90 },
                { id: 'empadao-queijo', name: 'Empadão de Queijo', emoji: '🧀', cashPrice: 14.90, cardPrice: 15.90 },
                { id: 'empadao-palmito', name: 'Empadão de Palmito', emoji: '🌿', cashPrice: 16.90, cardPrice: 17.90 },
                { id: 'empadao-camarao', name: 'Empadão de Camarão', emoji: '🦐', cashPrice: 22.90, cardPrice: 24.90 }
            ],
            sorvete: [
                { id: 'sorvete-100ml', name: 'Sorvete 100ml', emoji: '🍦', cashPrice: 4.90, cardPrice: 5.90, sizes: ['100ml'] },
                { id: 'sorvete-200ml', name: 'Sorvete 200ml', emoji: '🍦', cashPrice: 7.90, cardPrice: 8.90, sizes: ['200ml'] },
                { id: 'sorvete-300ml', name: 'Sorvete 300ml', emoji: '🍦', cashPrice: 10.90, cardPrice: 11.90, sizes: ['300ml'] },
                { id: 'sorvete-500ml', name: 'Sorvete 500ml', emoji: '🍦', cashPrice: 15.90, cardPrice: 16.90, sizes: ['500ml'] }
            ],
            torta: [
                { id: 'torta-chocolate', name: 'Torta de Chocolate', emoji: '🍫', cashPrice: 18.90, cardPrice: 19.90 },
                { id: 'torta-morango', name: 'Torta de Morango', emoji: '🍓', cashPrice: 22.90, cardPrice: 24.90 },
                { id: 'torta-limao', name: 'Torta de Limão', emoji: '🍋', cashPrice: 20.90, cardPrice: 21.90 },
                { id: 'torta-maracuja', name: 'Torta de Maracujá', emoji: '💛', cashPrice: 21.90, cardPrice: 22.90 },
                { id: 'torta-frango', name: 'Torta Salgada de Frango', emoji: '🐔', cashPrice: 25.90, cardPrice: 27.90 }
            ],
            pudim: [
                { id: 'pudim-p', name: 'Pudim Pequeno', emoji: '🍮', cashPrice: 7.90, cardPrice: 8.90, sizes: ['P'] },
                { id: 'pudim-m', name: 'Pudim Médio', emoji: '🍮', cashPrice: 12.90, cardPrice: 13.90, sizes: ['M'] },
                { id: 'pudim-g', name: 'Pudim Grande', emoji: '🍮', cashPrice: 18.90, cardPrice: 19.90, sizes: ['G'] }
            ],
            pave: [
                { id: 'pave-p', name: 'Pavê Pequeno', emoji: '🧁', cashPrice: 9.90, cardPrice: 10.90, sizes: ['P'] },
                { id: 'pave-m', name: 'Pavê Médio', emoji: '🧁', cashPrice: 15.90, cardPrice: 16.90, sizes: ['M'] },
                { id: 'pave-g', name: 'Pavê Grande', emoji: '🧁', cashPrice: 22.90, cardPrice: 24.90, sizes: ['G'] }
            ]
        };

        // Accompaniments and flavors
        const accompaniments = {
            acai: ['Paçoca', 'Jujuba', 'Granola', 'Banana', 'Morango', 'Leite Condensado', 'Mel', 'Castanha', 'Coco Ralado', 'Chocolate Granulado'],
            salgadinhos: ['Coxinha', 'Pastel', 'Risole', 'Quibe', 'Bolinha de Queijo', 'Enroladinho', 'Esfirra', 'Empada'],
            sorvete: ['Chocolate', 'Baunilha', 'Morango', 'Coco', 'Maracujá', 'Limão', 'Açaí', 'Flocos', 'Napolitano', 'Cookies']
        };

        const caldas = {
            acai: ['Chocolate', 'Morango', 'Caramelo', 'Leite Condensado', 'Frutas Vermelhas', 'Maracujá', 'Mel', 'Nutella'],
            sorvete: ['Chocolate', 'Morango', 'Caramelo', 'Leite Condensado', 'Frutas Vermelhas', 'Maracujá', 'Mel', 'Nutella']
        };

        function selectCategory(category) {
            const modal = document.getElementById('categoryModal');
            const title = document.getElementById('categoryTitle');
            const container = document.getElementById('categoryProducts');
            
            const categoryNames = {
                acai: 'Açaí',
                salgadinhos: 'Salgadinhos',
                batata: 'Batata Frita',
                bolos: 'Bolos',
                sucos: 'Sucos',
                empadao: 'Empadão',
                sorvete: 'Sorvete',
                torta: 'Torta',
                pudim: 'Pudim',
                pave: 'Pavê'
            };
            
            title.textContent = categoryNames[category];
            
            container.innerHTML = '';
            products[category].forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'card-hover bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer';
                productCard.onclick = () => selectProduct(product, category);
                
                let priceDisplay = '';
                if (product.sizes && typeof product.sizes === 'object' && !Array.isArray(product.sizes)) {
                    // For products with size-based pricing (like bolos)
                    priceDisplay = `A partir de R$ ${product.sizes.P.cash.toFixed(2).replace('.', ',')}`;
                } else {
                    priceDisplay = `À vista: R$ ${product.cashPrice.toFixed(2).replace('.', ',')}<br>Cartão: R$ ${product.cardPrice.toFixed(2).replace('.', ',')}`;
                }
                
                productCard.innerHTML = `
                    <div class="bg-gradient-to-br from-purple-500 to-purple-700 p-4 text-center">
                        <div class="text-4xl mb-2">${product.emoji}</div>
                        <h4 class="text-lg font-bold text-white">${product.name}</h4>
                    </div>
                    <div class="p-4">
                        <div class="text-sm font-semibold text-purple-600">${priceDisplay}</div>
                    </div>
                `;
                
                container.appendChild(productCard);
            });
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeCategoryModal() {
            document.getElementById('categoryModal').classList.add('hidden');
            document.getElementById('categoryModal').classList.remove('flex');
        }

        function selectProduct(product, category) {
            currentProduct = { ...product, category };
            closeCategoryModal();
            openCustomizationModal();
        }

        function openCustomizationModal() {
            const modal = document.getElementById('customizationModal');
            const title = document.getElementById('customizationTitle');
            const content = document.getElementById('customizationContent');
            
            title.textContent = `Personalize: ${currentProduct.name}`;
            
            let customizationHTML = `
                <div class="space-y-6">
                    <div class="text-center">
                        <div class="text-6xl mb-4">${currentProduct.emoji}</div>
                        <h4 class="text-2xl font-bold">${currentProduct.name}</h4>
                    </div>
            `;

            // Size selection for products with sizes
            if (currentProduct.sizes) {
                if (Array.isArray(currentProduct.sizes)) {
                    // Simple size array (like açaí, sorvete)
                    customizationHTML += `
                        <div>
                            <h5 class="text-lg font-semibold mb-3">Tamanho:</h5>
                            <div class="grid grid-cols-2 gap-3">
                    `;
                    currentProduct.sizes.forEach(size => {
                        customizationHTML += `
                            <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                <input type="radio" name="size" value="${size}" class="mr-2" required>
                                <span>${size}</span>
                            </label>
                        `;
                    });
                    customizationHTML += `</div></div>`;
                } else {
                    // Size object with pricing (like bolos)
                    customizationHTML += `
                        <div>
                            <h5 class="text-lg font-semibold mb-3">Tamanho:</h5>
                            <div class="space-y-2" id="sizeOptions">
                    `;
                    Object.keys(currentProduct.sizes).forEach(size => {
                        const sizeData = currentProduct.sizes[size];
                        customizationHTML += `
                            <label class="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                <div class="flex items-center">
                                    <input type="radio" name="size" value="${size}" class="mr-2" onchange="updatePriceDisplay()" required>
                                    <span>${size}</span>
                                </div>
                                <div class="text-sm">
                                    <div>À vista: R$ ${sizeData.cash.toFixed(2).replace('.', ',')}</div>
                                    <div>Cartão: R$ ${sizeData.card.toFixed(2).replace('.', ',')}</div>
                                </div>
                            </label>
                        `;
                    });
                    customizationHTML += `</div></div>`;
                }
            }

            // Portions for salgadinhos
            if (currentProduct.portions) {
                customizationHTML += `
                    <div>
                        <h5 class="text-lg font-semibold mb-3">Porção:</h5>
                        <div class="grid grid-cols-1 gap-3">
                `;
                currentProduct.portions.forEach(portion => {
                    customizationHTML += `
                        <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input type="radio" name="portion" value="${portion}" class="mr-2" required>
                            <span>${portion}</span>
                        </label>
                    `;
                });
                customizationHTML += `</div></div>`;
            }

            // Accompaniments
            if (accompaniments[currentProduct.category]) {
                const isAcai = currentProduct.category === 'acai';
                const isSorvete = currentProduct.category === 'sorvete';
                
                customizationHTML += `
                    <div>
                        <h5 class="text-lg font-semibold mb-3">${isAcai ? 'Acompanhamentos:' : isSorvete ? 'Sabores (máximo 2):' : 'Sabores:'}</h5>
                        <div class="grid grid-cols-2 gap-2">
                `;
                accompaniments[currentProduct.category].forEach(item => {
                    const inputType = 'checkbox';
                    const maxLimit = isSorvete ? 'onchange="limitSorveteSelection(this)"' : '';
                    customizationHTML += `
                        <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-gray-50">
                            <input type="${inputType}" name="accompaniments" value="${item}" class="mr-2" ${maxLimit}>
                            <span class="text-sm">${item}</span>
                        </label>
                    `;
                });
                customizationHTML += `</div></div>`;
            }

            // Additional accompaniments for sorvete
            if (currentProduct.category === 'sorvete') {
                const sorveteAccompaniments = ['Paçoca', 'Jujuba', 'Granola', 'Banana', 'Morango', 'Leite Condensado', 'Mel', 'Castanha', 'Coco Ralado', 'Chocolate Granulado'];
                customizationHTML += `
                    <div>
                        <h5 class="text-lg font-semibold mb-3">Acompanhamentos:</h5>
                        <div class="grid grid-cols-2 gap-2">
                `;
                sorveteAccompaniments.forEach(item => {
                    customizationHTML += `
                        <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-gray-50">
                            <input type="checkbox" name="sorveteAccompaniments" value="${item}" class="mr-2">
                            <span class="text-sm">${item}</span>
                        </label>
                    `;
                });
                customizationHTML += `</div></div>`;
            }

            // Caldas (for açaí and sorvete)
            if (caldas[currentProduct.category]) {
                customizationHTML += `
                    <div>
                        <h5 class="text-lg font-semibold mb-3">Sabores de Calda (escolha 1):</h5>
                        <div class="grid grid-cols-2 gap-2">
                `;
                caldas[currentProduct.category].forEach(calda => {
                    customizationHTML += `
                        <label class="flex items-center p-2 border rounded cursor-pointer hover:bg-gray-50">
                            <input type="radio" name="caldas" value="${calda}" class="mr-2">
                            <span class="text-sm">${calda}</span>
                        </label>
                    `;
                });
                customizationHTML += `</div></div>`;
            }

            // Payment method
            customizationHTML += `
                <div>
                    <h5 class="text-lg font-semibold mb-3">Forma de Pagamento:</h5>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input type="radio" name="paymentMethod" value="cash" class="mr-2" onchange="updatePriceDisplay()" required>
                            <span>💰 À Vista</span>
                        </label>
                        <label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input type="radio" name="paymentMethod" value="card" class="mr-2" onchange="updatePriceDisplay()" required>
                            <span>💳 Cartão</span>
                        </label>
                    </div>
                </div>
            `;

            // Price display
            customizationHTML += `
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-green-600" id="currentPrice">Selecione as opções</div>
                    </div>
                </div>
            `;

            // Add to cart button
            customizationHTML += `
                <button onclick="addToCart()" class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-colors">
                    Adicionar ao Carrinho
                </button>
            `;

            customizationHTML += `</div>`;
            
            content.innerHTML = customizationHTML;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function limitSorveteSelection(checkbox) {
            const checkboxes = document.querySelectorAll('input[name="accompaniments"]:checked');
            if (checkboxes.length > 2) {
                checkbox.checked = false;
                alert('Você pode selecionar no máximo 2 sabores de sorvete.');
            }
        }

        function updatePriceDisplay() {
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
            const size = document.querySelector('input[name="size"]:checked');
            const priceDisplay = document.getElementById('currentPrice');
            
            if (!paymentMethod) {
                priceDisplay.textContent = 'Selecione a forma de pagamento';
                return;
            }
            
            let price = 0;
            
            if (currentProduct.sizes && typeof currentProduct.sizes === 'object' && !Array.isArray(currentProduct.sizes)) {
                // Products with size-based pricing (like bolos)
                if (size) {
                    const sizeData = currentProduct.sizes[size.value];
                    price = paymentMethod.value === 'cash' ? sizeData.cash : sizeData.card;
                }
            } else {
                // Products with fixed pricing
                price = paymentMethod.value === 'cash' ? currentProduct.cashPrice : currentProduct.cardPrice;
            }
            
            if (price > 0) {
                priceDisplay.textContent = `R$ ${price.toFixed(2).replace('.', ',')}`;
            } else {
                priceDisplay.textContent = 'Selecione o tamanho';
            }
        }

        function closeCustomizationModal() {
            document.getElementById('customizationModal').classList.add('hidden');
            document.getElementById('customizationModal').classList.remove('flex');
        }

        function addToCart() {
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
            const size = document.querySelector('input[name="size"]:checked');
            const portion = document.querySelector('input[name="portion"]:checked');
            const accompaniments = Array.from(document.querySelectorAll('input[name="accompaniments"]:checked')).map(cb => cb.value);
            const sorveteAccompaniments = Array.from(document.querySelectorAll('input[name="sorveteAccompaniments"]:checked')).map(cb => cb.value);
            const caldas = document.querySelector('input[name="caldas"]:checked') ? [document.querySelector('input[name="caldas"]:checked').value] : [];
            
            if (!paymentMethod) {
                alert('Selecione a forma de pagamento');
                return;
            }
            
            let price = 0;
            let itemName = currentProduct.name;
            
            if (currentProduct.sizes && typeof currentProduct.sizes === 'object' && !Array.isArray(currentProduct.sizes)) {
                if (!size) {
                    alert('Selecione o tamanho');
                    return;
                }
                const sizeData = currentProduct.sizes[size.value];
                price = paymentMethod.value === 'cash' ? sizeData.cash : sizeData.card;
                itemName += ` (${size.value})`;
            } else {
                price = paymentMethod.value === 'cash' ? currentProduct.cashPrice : currentProduct.cardPrice;
                if (size) itemName += ` (${size.value})`;
                if (portion) itemName += ` (${portion.value})`;
            }
            
            const cartItem = {
                id: Date.now(),
                name: itemName,
                emoji: currentProduct.emoji,
                price: price,
                paymentMethod: paymentMethod.value,
                accompaniments: accompaniments,
                sorveteAccompaniments: sorveteAccompaniments,
                caldas: caldas,
                quantity: 1
            };
            
            cart.push(cartItem);
            updateCartDisplay();
            closeCustomizationModal();
            
            // Show success message with product details
            showSuccessMessage(`✅ ${itemName} foi adicionado ao carrinho!`);
        }

        function updateCartDisplay() {
            const cartCount = document.getElementById('cartCount');
            cartCount.textContent = cart.length;
        }

        function openCart() {
            const modal = document.getElementById('cartModal');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="text-center text-gray-500 py-8">Seu carrinho está vazio</div>';
                cartTotal.textContent = 'R$ 0,00';
            } else {
                cartItems.innerHTML = '';
                let total = 0;
                
                cart.forEach((item, index) => {
                    total += item.price * item.quantity;
                    
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'flex items-center justify-between p-4 border rounded-lg';
                    itemDiv.innerHTML = `
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">${item.emoji}</span>
                            <div>
                                <div class="font-semibold">${item.name}</div>
                                <div class="text-sm text-gray-600">
                                    ${item.paymentMethod === 'cash' ? '💰 À Vista' : '💳 Cartão'}
                                    ${item.accompaniments.length > 0 ? ` • ${item.accompaniments.join(', ')}` : ''}
                                    ${item.sorveteAccompaniments && item.sorveteAccompaniments.length > 0 ? ` • Acompanhamentos: ${item.sorveteAccompaniments.join(', ')}` : ''}
                                    ${item.caldas && item.caldas.length > 0 ? ` • Calda: ${item.caldas.join(', ')}` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center space-x-2">
                                <button onclick="changeQuantity(${index}, -1)" class="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300">-</button>
                                <span class="w-8 text-center">${item.quantity}</span>
                                <button onclick="changeQuantity(${index}, 1)" class="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300">+</button>
                            </div>
                            <div class="text-lg font-semibold">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
                            <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 ml-2">🗑️</button>
                        </div>
                    `;
                    cartItems.appendChild(itemDiv);
                });
                
                cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
            }
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeCart() {
            document.getElementById('cartModal').classList.add('hidden');
            document.getElementById('cartModal').classList.remove('flex');
        }

        function changeQuantity(index, change) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
                updateCartDisplay();
            }
            openCart(); // Refresh cart display
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartDisplay();
            openCart(); // Refresh cart display
        }

        function proceedToCheckout() {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            
            closeCart();
            openCheckout();
        }

        function openCheckout() {
            const modal = document.getElementById('checkoutModal');
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            document.getElementById('checkoutSubtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            document.getElementById('checkoutTotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeCheckout() {
            document.getElementById('checkoutModal').classList.add('hidden');
            document.getElementById('checkoutModal').classList.remove('flex');
        }

        function toggleDeliveryOptions() {
            const deliveryType = document.querySelector('input[name="deliveryType"]:checked');
            const deliveryOptions = document.getElementById('deliveryOptions');
            const deliveryFeeRow = document.getElementById('deliveryFeeRow');
            
            if (deliveryType && deliveryType.value === 'delivery') {
                deliveryOptions.classList.remove('hidden');
                deliveryFeeRow.classList.remove('hidden');
            } else {
                deliveryOptions.classList.add('hidden');
                deliveryFeeRow.classList.add('hidden');
                deliveryFee = 0;
                updateCheckoutTotal();
            }
        }

        function calculateDeliveryFee() {
            const neighborhood = document.getElementById('customerNeighborhood');
            const selectedOption = neighborhood.options[neighborhood.selectedIndex];
            
            if (selectedOption.dataset.fee) {
                deliveryFee = parseFloat(selectedOption.dataset.fee);
                document.getElementById('deliveryFeeDisplay').textContent = `Taxa de entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}`;
                document.getElementById('checkoutDeliveryFee').textContent = `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`;
                updateCheckoutTotal();
            }
        }

        function updateCheckoutTotal() {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const total = subtotal + deliveryFee;
            document.getElementById('checkoutTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

        document.getElementById('checkoutForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('customerName').value;
            const phone = document.getElementById('customerPhone').value;
            const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
            
            let address = '';
            let neighborhood = '';
            
            if (deliveryType === 'delivery') {
                address = document.getElementById('customerAddress').value;
                const reference = document.getElementById('customerReference').value;
                const neighborhoodSelect = document.getElementById('customerNeighborhood');
                neighborhood = neighborhoodSelect.options[neighborhoodSelect.selectedIndex].text;
                
                if (!address || !neighborhood) {
                    alert('Preencha todos os dados de entrega');
                    return;
                }
            }
            
            // Generate WhatsApp message
            let message = `🍔 *PEDIDO - EXPLOSÃO DE SABORES* 🍔\n\n`;
            message += `👤 *Cliente:* ${name}\n`;
            message += `📱 *WhatsApp:* ${phone}\n`;
            message += `🚚 *Tipo:* ${deliveryType === 'pickup' ? 'Retirada no Local' : 'Entrega'}\n`;
            
            if (deliveryType === 'delivery') {
                message += `📍 *Endereço:* ${address}\n`;
                if (reference) {
                    message += `🗺️ *Referência:* ${reference}\n`;
                }
                message += `🏘️ *Bairro:* ${neighborhood}\n`;
            }
            
            message += `\n📋 *ITENS DO PEDIDO:*\n`;
            
            cart.forEach((item, index) => {
                message += `\n${index + 1}. ${item.emoji} *${item.name}*\n`;
                message += `   Quantidade: ${item.quantity}\n`;
                message += `   Pagamento: ${item.paymentMethod === 'cash' ? '💰 À Vista' : '💳 Cartão'}\n`;
                if (item.accompaniments.length > 0) {
                    message += `   Acompanhamentos: ${item.accompaniments.join(', ')}\n`;
                }
                if (item.sorveteAccompaniments && item.sorveteAccompaniments.length > 0) {
                    message += `   Acompanhamentos: ${item.sorveteAccompaniments.join(', ')}\n`;
                }
                if (item.caldas && item.caldas.length > 0) {
                    message += `   Calda: ${item.caldas.join(', ')}\n`;
                }
                message += `   Valor: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
            });
            
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            message += `\n💰 *RESUMO FINANCEIRO:*\n`;
            message += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
            
            if (deliveryFee > 0) {
                message += `Taxa de Entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
            }
            
            const total = subtotal + deliveryFee;
            message += `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
            
            message += `\n✨ Obrigado por escolher a Explosão de Sabores! ✨`;
            
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Clear cart and close modal
            cart = [];
            updateCartDisplay();
            closeCheckout();
            
            alert('Pedido enviado para o WhatsApp! Aguarde nosso contato.');
        });

        function showSuccessMessage(message) {
            // Remove any existing success message
            const existingMessage = document.querySelector('.success-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Create new success message
            const messageDiv = document.createElement('div');
            messageDiv.className = 'success-message';
            messageDiv.innerHTML = `
                <div class="flex items-center space-x-2">
                    <span class="text-xl">🛒</span>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(messageDiv);
            
            // Show message with animation
            setTimeout(() => {
                messageDiv.classList.add('show');
            }, 100);
            
            // Hide message after 3 seconds
            setTimeout(() => {
                messageDiv.classList.remove('show');
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.remove();
                    }
                }, 300);
            }, 3000);
        }

        // Close modals when clicking outside
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal-overlay')) {
                closeCategoryModal();
                closeCustomizationModal();
                closeCart();
                closeCheckout();
            }
        });

      (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'981610cd541852d2',t:'MTc1ODI1MzI2OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
