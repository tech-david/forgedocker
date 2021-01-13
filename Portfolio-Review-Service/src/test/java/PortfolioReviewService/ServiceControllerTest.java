package PortfolioReviewService;

import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.forge.PortfolioReviewService.PortfolioReviewServiceApplication;
import com.forge.PortfolioReviewService.controller.ServiceController;
import com.forge.PortfolioReviewService.models.Portfolio;
import com.forge.PortfolioReviewService.models.PortfolioItems;
import com.forge.PortfolioReviewService.models.User;
import com.forge.PortfolioReviewService.repository.PortfolioRepo;
import com.forge.PortfolioReviewService.repository.UserRepo;

@SpringBootTest(classes = PortfolioReviewServiceApplication.class)
public class ServiceControllerTest {
	@MockBean
	private PortfolioRepo portfolioRepo;
	
	@MockBean
	private UserRepo userRepo;
	
	@Autowired
	private ServiceController serviceController;		
	
//	@Test
//	public void getAllPortfoliosTest() {
//	
//		User user = new User(1, "test1@test.com", "password1", "FirstName1", "LastName1", false, null);
//	
//		List<Portfolio> list = new ArrayList<Portfolio>();
//		list.add(new Portfolio(1, "pending", user, null));
//		list.add(new Portfolio(2, "pending", user, null));
//		list.add(new Portfolio(3, "pending", user, null));
//		when(portfolioRepo.findAll()).thenReturn(list);
//		
//		ResponseEntity<List<Portfolio>> myEntity = new ResponseEntity<List<Portfolio>>(HttpStatus.ACCEPTED);
//        Mockito.when(serviceController.exchange(
//            Matchers.eq("/getPortfolios/1"),
//            Matchers.eq(HttpMethod.GET,
//            Matchers.<HttpEntity<List<Portfolio>>>any(),
//            Matchers.<ParameterizedTypeReference<List<Portfolio>>>any())
//        ).thenReturn(myEntity);
//
//        List<Portfolio> res = underTest.getListofObjectsA();
//        Assert.assertEquals(myobjectA, res.get(0));
//		
//		List<Portfolio> result = serviceController.getPortfolio(1);
//		
//		Assertions.assertEquals(3, result.size());
//	}
	
	@Test 
	public void getPortfoliosByStatusTest() {		
		User user = new User(1, "test1@test.com", "password1", "FirstName1", "LastName1", false, null);
		
		List<Portfolio> listPend = new ArrayList<Portfolio>();
		listPend.add(new Portfolio(1, "pending",user, null));
		listPend.add(new Portfolio(2, "pending", user, null));
		listPend.add(new Portfolio(3, "pending", user, null));
		when(portfolioRepo.findByStatus("pending")).thenReturn(listPend);
		
		List<Portfolio> result1 = serviceController.getPortfoliosByStatus("pending");
		
		List<Portfolio> listAppr = new ArrayList<Portfolio>();
		listAppr.add(new Portfolio(1, "approved",user, null));
		when(portfolioRepo.findByStatus("approved")).thenReturn(listAppr);
		
		List<Portfolio> result2 = serviceController.getPortfoliosByStatus("approved");
		
		Assertions.assertEquals(3, result1.size());
		Assertions.assertEquals(1, result2.size());
	}
	
	@Test
	public void getUsersTest() { // David fixed this 
		List<User> list = new ArrayList<User>();
		list.add(new User(1, "test1@test.com", "password1", "FirstName1", "LastName1", false, null));
		list.add(new User(2, "test2@test.com", "password2", "FirstName2", "LastName2", false, null));
		list.add(new User(3, "test3@test.com", "password3", "FirstName3", "LastName3", false, null));
		when(userRepo.findAll()).thenReturn(list);
		
		List<User> result = serviceController.getUsers();
		
		Assertions.assertEquals(3, result.size());
	}
	
//	@Test
//	public void updatePortfolioTest() {
//		List<PortfolioItems> portfolioSection = null;
//		Portfolio portfolio = new Portfolio(1, "pending", null, portfolioSection);
//		List<Portfolio> list = new ArrayList<Portfolio>();
//		list.add(portfolio);
//		
//		User user = new User(1, "test1@test.com", "password1", "FirstName1", "LastName1", false, list);
//		when(portfolioRepo.save(any())).thenReturn(portfolio);
//		
//		serviceController.updatePortfolio(portfolio);
//		verify(portfolioRepo, times(1)).save(any());
//		
//	}
	
	@Test
	public void getPortfolioByIDTest() {
		Portfolio portfolio = new Portfolio(1, "pending", userRepo.findByUserId(1), null);
		when(portfolioRepo.findById(1)).thenReturn(portfolio);
		
		serviceController.getPortfolioByID("1");
		verify(portfolioRepo, times(1)).findById(1);
	}
	

	@Test
	public void getUserTest() { // this 
		User user = new User(1, "myemail@email.com", "123", "Annie", "Rogers", false, null);
		when(userRepo.findByUserId(1)).thenReturn(user);
		
		User result = serviceController.getUser(1);
		
		Assertions.assertEquals(1, result.getUserId());
		verify(userRepo, times(1)).findByUserId(1);
	}
	
//	@Test
//	public void getPortfolioTest() {  // this test 
//		User user = new User(1, "myemail@email.com", "123", "Annie", "Rogers", false, null);
//		List<Portfolio> list = new ArrayList<Portfolio>();
//		list.add(new Portfolio(1, "pending", userRepo.findByUserId(1), null));
//		list.add(new Portfolio(2, "pending", userRepo.findByUserId(1), null));
//		
//		when(userRepo.findByUserId(1)).thenReturn(user);
//		when(portfolioRepo.findByUser(userRepo.findByUserId(1)).thenReturn(list); //must be optional user
//		
//		List<Portfolio> result = serviceController.getPortfolio(1);
//		
//		Assertions.assertEquals(2, result.size());
//		verify(userRepo, times(1)).findByUserId(1);
//		verify(portfolioRepo, times(1)).findByUserId(1); //user must be optional
//	}
	
	@Test //tests 
	public void createPortfolioTest() {
		User user = new User(1, "test1@test.com", "password1", "FirstName1", "LastName1", false, null);
		
		List<PortfolioItems> portfolioSection = null;
		Portfolio portfolio = new Portfolio(1, "pending", user, portfolioSection);
		when(portfolioRepo.save(portfolio)).thenReturn(portfolio);
		
		serviceController.createPortfolio(0); //swapped this to int type mismatch possible failpoin
		
		verify(portfolioRepo, times(1)).save(portfolio);
	}
}