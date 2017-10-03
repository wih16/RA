package com.archimatetool.costing.wizard;

import java.util.ArrayList;

import org.eclipse.emf.common.util.EList;
import org.eclipse.jface.wizard.WizardPage;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.wb.swt.SWTResourceManager;

import com.archimatetool.costing.PropertyGroup;
import com.archimatetool.model.IArchimateFactory;
import com.archimatetool.model.IProperty;

import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.events.MouseEvent;
import org.eclipse.swt.events.MouseAdapter;

public class EnterDataWizardPage extends WizardPage {
	//The properties of the selected element
	private EList<IProperty> properties;
	//The label containing "Properties"
	private Label lblNewLabel;
	//The label containing "Values"
	private Label lblValues;
	//A list of PropertyGroups
	private ArrayList<PropertyGroup> pg_array;
	//the index of the previous array 
	private int index; 
	//the text of the consumption metric
	private Text consumption_metric; 
	/**
	 * Constructor of the Wizard Page
	 * @param name The name of the selected element
	 * @param properties The properties of the selected element
	 */
	public EnterDataWizardPage(String name, EList<IProperty> properties) {
		//name of the wizard
		super("Enter Data Wizard");
		//name of the page
		setTitle("Enter Costing Data");
		//the description of the page
		setDescription("Please update the costing data for " + name);
		//initializing the variables
		this.properties = properties;
		pg_array = new ArrayList<PropertyGroup>(); 
		index = 0; 
	}

	/**
	 * Create contents of the wizard, generated by the design tab
	 * @param parent
	 */
	public void createControl(Composite parent) {
		Composite container = new Composite(parent, SWT.NULL);

		setControl(container);
		//setting a 3 column grid layout
		container.setLayout(new GridLayout(3, false));
		
		//The Properties Label
		lblNewLabel = new Label(container, SWT.NONE);
		lblNewLabel.setFont(SWTResourceManager.getFont("Segoe UI", 10, SWT.BOLD));
		lblNewLabel.setText("Properties");
		
		//The Values Label
		lblValues = new Label(container, SWT.NONE);
		lblValues.setFont(SWTResourceManager.getFont("Segoe UI", 10, SWT.BOLD));
		lblValues.setText("Values");
		
		//Fills a space
		new Label(container, SWT.NONE);
		
		//Loop throught the list of properties 
		for(IProperty p : properties){
			if(p.getKey().toLowerCase().equals("consumption metric"))
				continue; 
			//Label of the property key
			Label addLabel = new Label(container, SWT.NONE);
			addLabel.setLayoutData(new GridData(SWT.RIGHT, SWT.CENTER, false, false, 1, 1));
			addLabel.setText(p.getKey());
			
			//Editable text of the property value
			Text addText = new Text(container, SWT.BORDER);
			addText.setText(p.getValue());
			addText.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
			
			//delete button
			Button addButton = new Button(container, SWT.NONE);
			addButton.setData(index);
			addButton.addMouseListener(new MouseAdapter() {
				@Override
				//if the button is clicked
				public void mouseDown(MouseEvent e) {
					if(e.button == 1){
						int i = (int) addButton.getData(); 
						try{
							pg_array.get(i).delete();
							pg_array.remove(i);
							properties.remove(i);
						}
						catch(Exception ex){}
					}
				}
			});
			
			addButton.setText("Delete");

			//create a property, used so that the write elements are deleted by the delete button
			PropertyGroup pg = new PropertyGroup(addLabel, addText, addButton, p); 
			pg_array.add(pg);
			
			//incremement the global index
			index++; 
		}
		
		//Labels for the new cost section
		Label newLabel = new Label(container, SWT.NONE);
		newLabel.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, false, false, 1, 1));
		newLabel.setText("Add New Costs");
		newLabel.setFont(SWTResourceManager.getFont("Segoe UI", 10, SWT.BOLD));
		newLabel = new Label(container, SWT.NONE);
		newLabel.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, false, false, 1, 1));
		newLabel.setText("the property must begin with an underscore");
		new Label(container, SWT.NONE);

		//Give 3 empty new properties
		for(int i = 0; i < 3; i++){
			//text for the key of the property
			Text addText_1 = new Text(container, SWT.BORDER);
			addText_1.setLayoutData(new GridData(SWT.RIGHT, SWT.CENTER, false, false, 1, 1));
			
			//text for the value of the property 
			Text addText = new Text(container, SWT.BORDER);
			addText.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
			
			//delete button
			Button addButton = new Button(container, SWT.NONE);
			addButton.setData(index);
			addButton.addMouseListener(new MouseAdapter() {
				@Override
				public void mouseDown(MouseEvent e) {
					if(e.button == 1){
						int j = (int) addButton.getData(); 
						try{
							pg_array.get(j).delete();
							pg_array.remove(j);
						}
						catch(Exception ex){}
					}
				}
			});
			
			addButton.setText("Delete");

			PropertyGroup pg = new PropertyGroup(addText_1, addText, addButton, null); 
			pg_array.add(pg);
			index++; 
		}
		
		Label consumption = new Label(container, SWT.NONE);
		consumption.setLayoutData(new GridData(SWT.LEFT, SWT.CENTER, false, false, 1, 1));
		consumption.setText("Consumption Metric Unit");
		consumption.setFont(SWTResourceManager.getFont("Segoe UI", 10, SWT.BOLD));

		String metric = null; 
		for(IProperty p : properties){
			if(p.getKey().toLowerCase().equals("consumption metric")){
				metric = p.getValue();
			}
		}
		
		//text for the value of the property 
		consumption_metric = new Text(container, SWT.BORDER);
		consumption_metric.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1));
		if(metric != null){
			consumption_metric.setText(metric);
		}
		
	}
	
	/**
	 * Called by EnterDataWizard's finish method, adds the new properties 
	 */
	public boolean finish(){
		boolean number_check = true; 
		//loop trough all the remaining Property Groups
		for(int i = 0; i < pg_array.size(); i++){
			//if the property passed inspection
			if(pg_array.get(i).check()){
				IProperty p; 
				//if the property is new, add it
				if((p = pg_array.get(i).finish()) != null){
					properties.add(p);
				}
			}
			//if the property failed inspection
			else{
				//set the valid check to false; 
				number_check = false; 
			}
		}
		//variable to check if the consumption metric property already exists
		boolean check = false; 
		//if the user entered a value for the consumption metric
		if(consumption_metric.getText() != null){
			//loop through the properties
			for(IProperty p : properties){
				//if the property is the consumption metric
				if(p.getKey().toLowerCase().equals("consumption metric")){
					//update the consumption metric
					p.setValue(consumption_metric.getText());
					check = true; 
					break; 
				}
			}
			//if the consumption metric didn't already exist
			if(!check){
				//create a new property with the consumption metric
				IProperty p = IArchimateFactory.eINSTANCE.createProperty(); 
				p.setKey("Consumption Metric");
				p.setValue(consumption_metric.getText());
				properties.add(p);
			}
		}
		//return the valid number check
		return number_check; 
		
	}
	
}
