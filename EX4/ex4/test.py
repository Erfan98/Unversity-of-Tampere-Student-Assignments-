	
# NOTAS:
# 5 nota(s) de R$ 100.00
# 1 nota(s) de R$ 50.00
# 1 nota(s) de R$ 20.00
# 0 nota(s) de R$ 10.00
# 1 nota(s) de R$ 5.00
# 0 nota(s) de R$ 2.00
# MOEDAS:
# 1 moeda(s) de R$ 1.00
# 1 moeda(s) de R$ 0.50
# 0 moeda(s) de R$ 0.25
# 2 moeda(s) de R$ 0.10
# 0 moeda(s) de R$ 0.05
# 3 moeda(s) de R$ 0.01


notes=[100,50,20,10,5,2]
coins=[0.50, 0.25, 0.10, 0.05,0.01]
t_taka=float(input())
taka=int(t_taka)
poysha=t_taka-taka
print("NOTAS:")
for i in notes:
    print("{} nota(s) de R$ {}.00".format(taka//i,i))
    taka=taka%i

print("MOEDAS:")
print("{} moeda(s) de R$ {}.00".format(taka//1,1))  
for i in coins:
    print("{} moeda(s) de R$ {:.2f}".format(int(poysha//i),i))
    poysha=poysha%i




